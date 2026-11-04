import React, { useState } from 'react';
import './CyberTerminal.css';

const systemLogs = [
  { time: "00:00:01", tag: "KERNEL", msg: "Bare-metal Linux cluster initialized (RHEL 9 / Proxmox VE)" },
  { time: "00:00:03", tag: "DAEMON", msg: "Ansible automation daemon: 42 node playbooks verified" },
  { time: "00:00:06", tag: "SIM_ENG", msg: "Continuous RTL simulation harness mounted: 0 defects detected" },
  { time: "00:00:10", tag: "HW_TELE", msg: "iDRAC/IPMI out-of-band monitoring: 100% telemetry online" },
  { time: "00:00:14", tag: "SYSTEM", msg: "Security: OpenLDAP directory authenticated with RBAC policies" }
];

const CyberTerminal = () => {
  const [activeTab, setActiveTab] = useState('status');
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('ssh khoa@systems.khoabui.io');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cyber-terminal-card tech-corner-card">
      {/* Terminal Top Bar */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot--red"></span>
          <span className="dot dot--yellow"></span>
          <span className="dot dot--green"></span>
        </div>
        <div className="terminal-title">khoa@enterprise-simulation-cluster: ~</div>
        <div className="terminal-controls">
          <button 
            type="button" 
            className="terminal-btn-copy" 
            onClick={handleCopyCmd}
            title="Copy command"
          >
            {copied ? '✓ COPIED' : 'COPY SSH'}
          </button>
        </div>
      </div>

      {/* Terminal Sub-header Navigation */}
      <div className="terminal-tabs">
        <button 
          className={`terminal-tab ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          [ TELEMETRY ]
        </button>
        <button 
          className={`terminal-tab ${activeTab === 'specs' ? 'active' : ''}`}
          onClick={() => setActiveTab('specs')}
        >
          [ HARDWARE SPECS ]
        </button>
        <button 
          className={`terminal-tab ${activeTab === 'logs' ? 'active' : ''}`}
          onClick={() => setActiveTab('logs')}
        >
          [ KERNEL LOGS ]
        </button>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        {activeTab === 'status' && (
          <div className="terminal-section">
            <div className="terminal-line text-cyan">
              <span className="prompt">$</span> systemctl status eda-simulation-pipeline.service
            </div>
            <div className="terminal-line text-green">
              ● eda-simulation-pipeline.service - High-Throughput RTL Regression & Verification
            </div>
            <div className="terminal-line text-dim">
              &nbsp;&nbsp;&nbsp;Loaded: loaded (/etc/systemd/system/eda-simulation.service; enabled)
            </div>
            <div className="terminal-line text-dim">
              &nbsp;&nbsp;&nbsp;Active: <span className="badge-active">active (running)</span> since Thu 2026-11-03 21:00:00 UTC
            </div>
            <div className="terminal-line text-dim">
              &nbsp;&nbsp;&nbsp;Tasks: 128 threads across bare-metal server cluster
            </div>
            <div className="terminal-line text-dim">
              &nbsp;&nbsp;&nbsp;Memory: 256.0 GB ECC Registered (High-Performance Compute)
            </div>
            <div className="terminal-line text-dim">
              &nbsp;&nbsp;&nbsp;Storage: PERC RAID-10 NVMe Array (Zero Degraded Volumes)
            </div>
            <div className="terminal-line text-yellow" style={{ marginTop: '0.5rem' }}>
              &gt; Simulation regression runs: 1,420 passed / 0 critical failures
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="terminal-section">
            <div className="terminal-line text-cyan">
              <span className="prompt">$</span> lscpu &amp;&amp; lshw -short
            </div>
            <div className="terminal-grid">
              <div className="spec-item">
                <span className="spec-label">PLATFORMS:</span>
                <span className="spec-val">Dell PowerEdge, HPE ProLiant, Supermicro</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">MANAGEMENT:</span>
                <span className="spec-val">iDRAC9 Enterprise, HPE iLO, IPMI 2.0</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">PROVISIONING:</span>
                <span className="spec-val">PXE Boot, Kickstart, Ansible Automation</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">HYPERVISORS:</span>
                <span className="spec-val">Proxmox VE 8, KVM, Linux Containers (LXC)</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">PROCESSORS:</span>
                <span className="spec-val">NXP Layerscape LA12xx, AMD EPYC, Intel Xeon</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">VALIDATION:</span>
                <span className="spec-val">Hardware-in-the-Loop (HIL), MemTest86, Prime95</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="terminal-section">
            <div className="terminal-line text-cyan">
              <span className="prompt">$</span> journalctl -u eda-automation.service -f --lines=5
            </div>
            {systemLogs.map((log, idx) => (
              <div className="terminal-line text-dim" key={idx}>
                <span className="log-time">[{log.time}]</span> <span className="log-tag">[{log.tag}]</span> {log.msg}
              </div>
            ))}
            <div className="terminal-line text-green blinking-cursor">
              &gt; System awaiting user input... _
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberTerminal;
