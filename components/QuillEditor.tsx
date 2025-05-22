'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { useEffect, useCallback, useRef } from 'react';
import debounce from 'lodash/debounce';
import { ImagePlus, Trash2 } from 'lucide-react';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function QuillEditor({ value, onChange }: EditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Debounce the onChange callback
  const debouncedOnChange = useCallback(
    debounce((content: string) => {
      onChange(content);
    }, 500),
    [onChange]
  );

  const handleImageUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
        listItem: {
          HTMLAttributes: {
            class: 'my-1',
          },
        },
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image.extend({
        renderHTML({ HTMLAttributes }) {
          return [
            'figure',
            { class: 'relative inline-block' },
            ['img', { ...HTMLAttributes }],
            [
              'button',
              {
                class: 'image-delete-button',
                'data-type': 'image-delete-button',
                type: 'button',
              },
              ['span', { class: 'sr-only' }, 'Delete image'],
            ],
          ];
        },
      }).configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg relative group',
        },
        allowBase64: true,
      }),
      Placeholder.configure({
        placeholder: 'Start writing your content...',
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      debouncedOnChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[200px]',
      },
      handleClick: (view, pos, event) => {
        const target = event.target as HTMLElement;
        const deleteButton = target.closest(
          '[data-type="image-delete-button"]'
        );
        if (deleteButton) {
          event.preventDefault();
          event.stopPropagation();

          // Find the parent figure element
          const figure = deleteButton.closest('figure');
          if (figure) {
            // Get the position of the figure node
            const figurePos = view.posAtDOM(figure, 0);
            const figureNode = view.state.doc.nodeAt(figurePos);

            if (figureNode) {
              editor
                ?.chain()
                .focus()
                .deleteRange({
                  from: figurePos,
                  to: figurePos + figureNode.nodeSize,
                })
                .run();
            }
          }
        }
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    const url = await handleImageUpload(file);
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-md">
      <div className="border-b p-2 flex gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded ${
            editor.isActive('bold') ? 'bg-gray-200' : ''
          }`}
        >
          Bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded ${
            editor.isActive('italic') ? 'bg-gray-200' : ''
          }`}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded ${
            editor.isActive('underline') ? 'bg-gray-200' : ''
          }`}
        >
          Underline
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`p-2 rounded ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''
          }`}
        >
          H2
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`p-2 rounded ${
            editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''
          }`}
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded ${
            editor.isActive('bulletList') ? 'bg-gray-200' : ''
          }`}
        >
          Bullet List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded ${
            editor.isActive('orderedList') ? 'bg-gray-200' : ''
          }`}
        >
          Numbered List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-2 rounded ${
            editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''
          }`}
        >
          Left
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-2 rounded ${
            editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''
          }`}
        >
          Center
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-2 rounded ${
            editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''
          }`}
        >
          Right
        </button>
        <button
          type="button"
          onClick={handleImageButtonClick}
          className="p-2 rounded"
        >
          <ImagePlus className="h-4 w-4" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
      </div>
      <EditorContent
        editor={editor}
        className="p-4 [&_figure]:group [&_figure]:relative [&_figure:hover_.image-delete-button]:opacity-100"
      />
      <style jsx global>{`
        .image-delete-button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          background-color: rgba(239, 68, 68, 0.9);
          color: white;
          border-radius: 9999px;
          padding: 0.5rem;
          opacity: 0;
          transition: opacity 0.2s;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          border: none;
          width: 2rem;
          height: 2rem;
        }
        .image-delete-button:hover {
          background-color: rgb(220, 38, 38);
        }
        .image-delete-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 6h18'/%3E%3Cpath d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6'/%3E%3Cpath d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2'/%3E%3Cline x1='10' y1='11' x2='10' y2='17'/%3E%3Cline x1='14' y1='11' x2='14' y2='17'/%3E%3C/svg%3E");
          mask-size: 1.25rem;
          mask-repeat: no-repeat;
          mask-position: center;
        }
      `}</style>
    </div>
  );
}
