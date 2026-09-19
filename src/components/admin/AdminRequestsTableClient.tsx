"use client";

import React, { useState } from "react";
import { DemoRequest, RequestStatus, RequestType } from "@/lib/demo-requests";
import {
  Search,
  Filter,
  Eye,
  CheckCircle2,
  Clock,
  XCircle,
  Mail,
  Phone,
  Building2,
  Calendar,
  Globe,
  MessageSquare,
  Sparkles,
  Inbox,
  UserCheck,
  CheckCheck,
  ChevronRight,
  X
} from "lucide-react";

interface AdminRequestsTableClientProps {
  initialRequests: DemoRequest[];
}

export function AdminRequestsTableClient({ initialRequests }: AdminRequestsTableClientProps) {
  const [requests, setRequests] = useState<DemoRequest[]>(initialRequests);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [typeFilter, setTypeFilter] = useState<string>("ALL");
  const [selectedRequest, setSelectedRequest] = useState<DemoRequest | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Compute metrics
  const totalCount = requests.length;
  const newCount = requests.filter((r) => r.status === "NEW").length;
  const contactedCount = requests.filter((r) => r.status === "CONTACTED").length;
  const closedCount = requests.filter((r) => r.status === "CLOSED").length;

  // Filter requests
  const filteredRequests = requests.filter((req) => {
    const matchesStatus = statusFilter === "ALL" || req.status === statusFilter;
    const matchesType = typeFilter === "ALL" || req.request_type === typeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      req.name.toLowerCase().includes(q) ||
      req.email.toLowerCase().includes(q) ||
      req.company.toLowerCase().includes(q) ||
      (req.message && req.message.toLowerCase().includes(q)) ||
      req.source_page.toLowerCase().includes(q);

    return matchesStatus && matchesType && matchesSearch;
  });

  // Handle status update
  const handleUpdateStatus = async (id: string, newStatus: RequestStatus) => {
    setUpdatingId(id);
    setMessage(null);

    try {
      const res = await fetch(`/api/demo-requests/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to update request status");
      }

      setRequests((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: newStatus, updated_at: data.request.updated_at } : r))
      );

      if (selectedRequest && selectedRequest.id === id) {
        setSelectedRequest((prev) => (prev ? { ...prev, status: newStatus, updated_at: data.request.updated_at } : null));
      }

      setMessage({ type: "success", text: `Request status updated to ${newStatus}` });
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Failed to update request status" });
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusBadge = (status: RequestStatus) => {
    switch (status) {
      case "NEW":
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono uppercase tracking-wider bg-blue-950 text-blue-400 border border-blue-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            NEW
          </span>
        );
      case "CONTACTED":
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono uppercase tracking-wider bg-amber-950 text-amber-400 border border-amber-800 flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-amber-400" />
            CONTACTED
          </span>
        );
      case "CLOSED":
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold font-mono uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            CLOSED
          </span>
        );
      default:
        return null;
    }
  };

  const getTypeBadge = (type: RequestType) => {
    switch (type) {
      case "DEMO":
        return (
          <span className="px-2 py-0.5 rounded bg-orange-950/80 text-orange-400 font-mono text-[10px] font-bold border border-orange-800">
            DEMO
          </span>
        );
      case "WALKTHROUGH":
        return (
          <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-400 font-mono text-[10px] font-bold border border-purple-800">
            WALKTHROUGH
          </span>
        );
      case "CONTACT":
        return (
          <span className="px-2 py-0.5 rounded bg-teal-950/80 text-teal-300 font-mono text-[10px] font-bold border border-teal-800">
            CONTACT
          </span>
        );
      case "NEWSLETTER":
        return (
          <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 font-mono text-[10px] font-bold border border-blue-800">
            NEWSLETTER
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded bg-navy-950 text-slate-300 font-mono text-[10px] font-bold border border-navy-800">
            {type}
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-navy-900 border border-navy-800 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F15E1C]/20 text-[#F15E1C] font-mono text-xs font-bold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" /> INBOUND PIPELINE
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Demo &amp; Lead Request Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Review inbound product demo requests, walkthrough submissions, and contact inquiries.
          </p>
        </div>
      </div>

      {/* Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-navy-900 border border-navy-800 shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Total Submissions</p>
            <h3 className="text-2xl font-extrabold text-white">{totalCount}</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-navy-950 border border-navy-700 text-slate-300 flex items-center justify-center">
            <Inbox className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-navy-900 border border-navy-800 shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">New Pending</p>
            <h3 className="text-2xl font-extrabold text-blue-400">{newCount}</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800 text-blue-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-navy-900 border border-navy-800 shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Contacted</p>
            <h3 className="text-2xl font-extrabold text-amber-400">{contactedCount}</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800 text-amber-400 flex items-center justify-center">
            <UserCheck className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-navy-900 border border-navy-800 shadow-md flex items-center justify-between">
          <div>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">Closed / Qualified</p>
            <h3 className="text-2xl font-extrabold text-emerald-400">{closedCount}</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center">
            <CheckCheck className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* System Feedback Message */}
      {message && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between border ${
            message.type === "success"
              ? "bg-emerald-950/80 border-emerald-800 text-emerald-300"
              : "bg-red-950/80 border-red-800 text-red-300"
          }`}
        >
          <span>{message.text}</span>
          <button onClick={() => setMessage(null)} className="text-slate-400 hover:text-white text-xs ml-4">
            Dismiss
          </button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-navy-900 border border-navy-800">
        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase mr-1">Status:</span>
          {["ALL", "NEW", "CONTACTED", "CLOSED"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 rounded-xl text-xs font-bold font-mono transition-all ${
                statusFilter === st
                  ? "bg-[#F15E1C] text-white shadow-sm"
                  : "bg-navy-950 text-slate-400 hover:text-white border border-navy-800"
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase">Type:</span>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-1.5 rounded-xl text-xs font-bold font-mono bg-navy-950 text-slate-200 border border-navy-800 focus:outline-none focus:border-[#F15E1C]"
          >
            <option value="ALL">ALL TYPES</option>
            <option value="DEMO">DEMO</option>
            <option value="WALKTHROUGH">WALKTHROUGH</option>
            <option value="CONTACT">CONTACT</option>
            <option value="NEWSLETTER">NEWSLETTER</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name, email, company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs font-medium rounded-xl bg-navy-950 border border-navy-800 text-white placeholder-slate-500 focus:outline-none focus:border-[#F15E1C] transition-colors"
          />
        </div>
      </div>

      {/* Requests Table */}
      <div className="rounded-3xl bg-navy-900 border border-navy-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-navy-950 text-slate-400 uppercase font-mono tracking-wider border-b border-navy-800">
              <tr>
                <th className="px-6 py-4">Request Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Contact Person</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Source Page</th>
                <th className="px-6 py-4">Submitted At</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800 text-slate-300">
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    No requests found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredRequests.map((req) => (
                  <tr key={req.id} className="hover:bg-navy-800/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getTypeBadge(req.request_type)}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(req.status)}
                    </td>

                    <td className="px-6 py-4 max-w-xs">
                      <p className="font-bold text-white text-sm">{req.name}</p>
                      <p className="font-mono text-[11px] text-slate-400 truncate">{req.email}</p>
                    </td>

                    <td className="px-6 py-4 font-semibold text-slate-200 whitespace-nowrap">
                      {req.company || "N/A"}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-navy-950 text-slate-400 font-mono text-[10px] border border-navy-800">
                        {req.source_page}
                      </span>
                    </td>

                    <td className="px-6 py-4 font-mono text-[11px] text-slate-400 whitespace-nowrap">
                      {new Date(req.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </td>

                    <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                      {/* Status quick toggle dropdown */}
                      <select
                        value={req.status}
                        disabled={updatingId === req.id}
                        onChange={(e) => handleUpdateStatus(req.id, e.target.value as RequestStatus)}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold font-mono bg-navy-950 text-slate-200 border border-navy-800 hover:border-slate-600 focus:outline-none"
                      >
                        <option value="NEW">Set NEW</option>
                        <option value="CONTACTED">Set CONTACTED</option>
                        <option value="CLOSED">Set CLOSED</option>
                      </select>

                      <button
                        onClick={() => setSelectedRequest(req)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#F15E1C]/20 text-[#F15E1C] hover:bg-[#F15E1C] hover:text-white transition-colors font-bold"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-navy-900 border border-navy-700 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <div className="flex items-center gap-3">
                {getTypeBadge(selectedRequest.request_type)}
                {getStatusBadge(selectedRequest.status)}
              </div>

              <button
                onClick={() => setSelectedRequest(null)}
                className="p-1.5 rounded-full bg-navy-950 text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Request Detail Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-extrabold text-white">{selectedRequest.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Request ID: {selectedRequest.id}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-navy-950 border border-navy-800">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#F15E1C]" />
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Email Address</p>
                    <a
                      href={`mailto:${selectedRequest.email}`}
                      className="text-xs font-bold text-white hover:underline hover:text-[#F15E1C]"
                    >
                      {selectedRequest.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-[#F15E1C]" />
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Company Name</p>
                    <p className="text-xs font-bold text-white">{selectedRequest.company || "N/A"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#F15E1C]" />
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Phone Number</p>
                    <p className="text-xs font-bold text-white">{selectedRequest.phone || "Not provided"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-[#F15E1C]" />
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase">Source Page</p>
                    <p className="text-xs font-bold text-white font-mono">{selectedRequest.source_page}</p>
                  </div>
                </div>
              </div>

              {/* Message / Payload Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                  <MessageSquare className="w-4 h-4 text-[#F15E1C]" />
                  <span>Submitted Details &amp; Priorities</span>
                </div>
                <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 text-xs text-slate-200 whitespace-pre-wrap leading-relaxed">
                  {selectedRequest.message || "No additional message provided."}
                </div>
              </div>

              {/* Timestamps */}
              <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 border-t border-navy-800 pt-4">
                <span>Created: {new Date(selectedRequest.created_at).toLocaleString()}</span>
                <span>Updated: {new Date(selectedRequest.updated_at).toLocaleString()}</span>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-xs font-mono text-slate-400">Set Status:</span>
                  {(["NEW", "CONTACTED", "CLOSED"] as RequestStatus[]).map((st) => (
                    <button
                      key={st}
                      disabled={updatingId === selectedRequest.id}
                      onClick={() => handleUpdateStatus(selectedRequest.id, st)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all ${
                        selectedRequest.status === st
                          ? "bg-[#F15E1C] text-white"
                          : "bg-navy-950 text-slate-400 hover:text-white border border-navy-800"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <a
                  href={`mailto:${selectedRequest.email}?subject=OMNiGRC ${selectedRequest.request_type} Request Response`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#F15E1C] hover:bg-[#ce4700] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Reply via Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
