import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Question from "./Question";

const SubNav = ({ id, className, transition, defaultActiveKey, tabs }) => {
  return (
    <Tabs
      defaultActiveKey={tabs[0].eventKey}
      transition={transition}
      id={id}
      className={className}
    >
      {tabs &&
        tabs.map((tab, index) => {
          return (
            <Tab key={index} eventKey={tab.eventKey} title={tab.title}>
              <Question />
              {tab.tabContent}
            </Tab>
          );
        })}
    </Tabs>
  );
};

export default SubNav;
