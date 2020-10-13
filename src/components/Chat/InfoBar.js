import React, { useState, useEffect } from "react";

export default function InfoBar({ roomname }) {
  return (
    <div className="info-bar">
      <h1>{roomname}</h1>

      <a href="/">
        <i class="fas fa-times"></i>
      </a>
    </div>
  );
}
