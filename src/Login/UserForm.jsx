import React, { Component } from 'react';

class CustomErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // ทำงานเพิ่มเติมตามที่คุณต้องการ เช่น บันทึกข้อผิดพลาด
    console.error('Error caught by CustomErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>We're sorry, but an error occurred while rendering this component.</p>
          {/* แสดง UI ที่เหมาะสมสำหรับผู้ใช้ที่เกิดข้อผิดพลาด */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;
