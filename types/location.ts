/**
 * Represents a legal service location with its details and available services
 */
export interface Location {
  city: string;
  address: string;
  phone: string;
  mapsUrl: string;
  businessHours?: string;
  services?: string[];
}

/**
 * Configuration for location-specific settings
 */
export interface LocationConfig {
  locations: Record<string, Location>;
  defaultBusinessHours: string;
  contactInfo: {
    phone: string;
    email: string;
  };
}
