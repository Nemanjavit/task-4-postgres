import React from "react";
import PageLayout from "../components/PageLayout";
import SubNav from "../components/SubNav";

const tabs = [
  {
    eventKey: "settings",
    title: "Settings",
    tabContent: <div>TAB CONTENT FOR SETTINGS</div>,
  },
  { eventKey: "questions", title: "Questions" },
  { eventKey: "results", title: "Results" },
  { eventKey: "aggregation", title: "Aggregation" },
];

const TemplatePage = () => {
  return (
    <PageLayout>
      <SubNav
        className="py-3"
        id="templates-tabs"
        tabs={tabs}
        transition={true}
      />
    </PageLayout>
  );
};

export default TemplatePage;
