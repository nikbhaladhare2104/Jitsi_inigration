"use client";

import React, { useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

const JitsiContainer = () => {
  const [isJitsiVisible, setIsJitsiVisible] = useState(false);

  const handleButtonClick = () => {
    setIsJitsiVisible(true);
  };
  const handleClose = () => {
    setIsJitsiVisible(false);
  };

  return (
    <div className="p-4 w-full flex items-center justify-center h-screen mt-24">
      {/* Button to open Jitsi */}
      {!isJitsiVisible && (
        <button
          className="p-2 bg-blue-500 text-white rounded-lg"
          onClick={handleButtonClick}
        >
          Start Video Call
        </button>
      )}

      {/* Render JitsiMeeting when isJitsiVisible is true */}
      {isJitsiVisible && (
        <div className="w-full h-screen relative">
          <JitsiMeeting
            domain="meet.jit.si"
            roomName="first jitsi room"
            configOverwrite={{
              startWithAudioMuted: true,
              disableModeratorIndicator: true,
              prejoinpageEnabled: false,
            }}
            interfaceConfigOverwrite={{
              SHOW_JITSI_WATERMARK: false,
            }}
            userInfo={{
              displayName: "",
              email: "",
            }}
            getIFrameRef={(iframeRef) => {
              iframeRef.style.height = "700px";
            }}
          />
          <button
            className="z-50  absolute top-4 right-4 p-2 bg-red-500 text-white rounded-lg"
            onClick={handleClose}
          >
            End Call
          </button>
        </div>
      )}
    </div>
  );
};

export default JitsiContainer;
