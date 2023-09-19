import React from "react";
import { connect } from "react-redux";
import clsx from "clsx";
import ReactGA from "react-ga4";

// comppnents
import IconSimple from "../IconSimple";

// mock data
import { idfClasses as mockIdfClasses } from "../../mockData/idfClasses";

// helpers
import { getClassListByGroup } from "../../helpers/getClassListByGroup";

// actions
import { setActiveClasses } from "../../redux/idfClasses.action";
import { dispatchLogEvent } from "../../libs/FirebaseEvent";

const mapStateToProps = (state) => {
  return {
    classesItem: state.idfClasses.classesItem,
    project: state.project.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveClasses: (classItem) => dispatch(setActiveClasses(classItem)),
  };
};

function ClassMenu({ project, classesItem, setActiveClasses }) {
  const [idfClasses, setIdfClasses] = React.useState([]);

  // fetch idfClasses
  React.useEffect(() => {
    if (!project) return;

    const results = getClassListByGroup(mockIdfClasses.data);
    setIdfClasses(results);
  }, [project]);

  function _handleClick(item) {
    console.log("test dispatch event firebase select_class: ", item.class_name);
    dispatchLogEvent("select_class", { name: item.class_name });

    // REACT GA
    ReactGA.event({
      category: "event REACT GA",
      action: "selected",
      label: "button", // optional
      value: item.class_name, // optional, must be a number
    });
    setActiveClasses(item);
  }

  if (idfClasses.length === 0) return <>No Class List</>;

  return (
    <ul className="font-medium">
      {idfClasses.map((classList) => (
        <li key={classList.group_id} className="cursor-pointer relative ">
          {/* checkbox to show/hide sub menu */}
          {classList.items.length > 0 && (
            <input
              data-tooltip-target={`tooltip-${classList.group_id}`}
              type="checkbox"
              className="absolute top-0 left-0 z-1 w-full h-[42px] cursor-pointer opacity-0 classChildren_checkbox"
            />
          )}

          <div className="class_header flex p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white ">
            {classList.icon && (
              <IconSimple
                icon={classList.icon}
                className="icon_arrow rotate-90  dark:text-[#fff]"
              />
            )}
            <span className="flex-1 mx-2 truncate ">
              {classList.group_name}
            </span>
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 mt-[2px] text-[12px] text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              {classList.items.length}
            </span>
          </div>

          {/* sub item */}
          {classList.items.length > 0 && (
            <ul className="class_item hidden">
              {classList.items.map((item) => (
                <li
                  key={item.class_id}
                  className="cursor-pointer relative pl-5"
                >
                  <div
                    className={clsx(
                      "class_header flex p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white px-2 items-center hover:bg-gray-200 dark:hover:bg-gray-700",
                      item.class_name === classesItem?.class_name &&
                        "bg-gray-200"
                    )}
                    onClick={() => _handleClick(item)}
                  >
                    <span className="flex-1 mx-2 truncate ">
                      {item.class_name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassMenu);
