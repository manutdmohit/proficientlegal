import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'AUD',
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  stripePaymentId: {
    type: String,
    required: true,
  },
  stripeSessionId: {
    type: String,
    required: true,
  },
  consultationType: {
    type: String,
    enum: ['comprehensive', 'targeted'],
    required: true,
  },
  consultationName: {
    type: String,
    required: true,
  },
  consultationDuration: {
    type: String,
    required: true,
  },
  consultationDate: {
    type: Date,
    required: true,
  },
  consultationTime: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Add middleware to update the updatedAt field
paymentSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Payment || mongoose.model('Payment', paymentSchema); 