import React from "react";
import clsx from "clsx";

// components
import ClassMenu from "../../components/ClassMenu/ClassMenu";
import IconSimple from "../../components/IconSimple";

function ClassSideBar() {
  const [isExpand, setIsExpand] = React.useState(false);

  return (
    <aside
      className={clsx(
        "transition-all shadow-[0_15px_30px_0_rgba(85,150,230,0.3)] mr-4 shrink-0 bg-gray-50 dark:bg-gray-800",
        isExpand ? "w-[40px]" : "w-[320px]"
      )}
    >
      {/* class top */}
      <div className="flex items-center justify-end p-2 h-[45px] shadow-[0_0_5px_0_rgba(85,150,230,0.3)]">
        <IconSimple
          icon={isExpand ? "ic:baseline-menu" : "ic:baseline-close"}
          onClick={() => setIsExpand((prevState) => !prevState)}
        />
      </div>

      {/* class menu */}
      <div
        className={clsx(
          "px-1 py-3 overflow-y-auto h-[calc(100vh-45px)]",
          isExpand ? "invisible" : "visible"
        )}
      >
        <ClassMenu />
      </div>
    </aside>
  );
}

export default ClassSideBar;
