import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";

export default () => {
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};
