'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
}
interface State {
  failed: boolean;
}

/**
 * Catches errors from the WebGL/three.js canvas (e.g. "Error creating WebGL
 * context") so a GPU/WebGL failure renders nothing instead of crashing the
 * whole page (which would freeze hydration and hide all animated content).
 */
class Canvas3DBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('3D background disabled (WebGL unavailable):', error);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export default Canvas3DBoundary;
