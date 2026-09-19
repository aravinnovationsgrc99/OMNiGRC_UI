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
}
