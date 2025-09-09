'use client';
import { useState } from 'react';


export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        className="chat-toggle-btn"
        aria-label="Open chat"
        onClick={() => setOpen(!open)}
      >
        <i className="bi bi-chat text-light me-2" aria-label="chat"></i>
        Let’s Chat!
      </button>

      {/* Chat Box */}
      {open && (
        <section className="chat-box bg-white shadow rounded">
          <div className="chat-header d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
            <strong>Ebikes Support</strong>
            <button className="btn btn-sm btn-outline-danger" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <div className="chat-body px-5 py-5">
            <p className="text-muted small">Hi there 👋 How can we help you today?</p>
          </div>
          <div className="chat-footer border-top p-2">
            <input type="text" className="form-control" placeholder="Write your message..." disabled />
          </div>
        </section>
      )}

      <style jsx>{`
        .chat-toggle-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #e01b24;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 50px;
          z-index: 1050;
          font-weight: 600;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        .chat-box {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 300px;
          max-height: 400px;
          display: flex;
          flex-direction: column;
          z-index: 1050;
        }

        @media (max-width: 576px) {
          .chat-box {
            width: 90%;
            right: 5%;
            bottom: 80px;
          }
        }
      `}</style>
    </>
  );
}
