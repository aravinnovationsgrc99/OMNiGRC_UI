export type RequestType = "DEMO" | "WALKTHROUGH" | "CONTACT" | "NEWSLETTER";
export type RequestStatus = "NEW" | "CONTACTED" | "CLOSED";

export interface DemoRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string | null;
  message: string | null;
  request_type: RequestType;
  source_page: string;
  status: RequestStatus;
  // Google Ads & UTM Campaign Attribution
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  gclid?: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateDemoRequestPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  request_type: RequestType;
  source_page: string;
  // Google Ads & UTM Campaign Attribution (optional)
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  gclid?: string | null;
}
