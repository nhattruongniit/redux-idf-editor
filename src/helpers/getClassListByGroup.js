export const getClassListByGroup = (data) => {
  return data.reduce((acc, currItem) => {
    const groupItem = {
      group_id: currItem.group_id,
      group_name: currItem.group_name,
      class_id: currItem.class_id,
      icon: "fe:arrow-up",
      items: [],
    };
    const isExisted = acc.some((item) => item.group_id === currItem.group_id);
    if (!isExisted) {
      acc.push(groupItem);
    }
    acc.forEach((item) => {
      if (item.group_id === currItem.group_id) {
        const classItem = {
          class_id: currItem.class_id,
          class_name: currItem.class_name,
        };
        item.items.push(classItem);
      }
    });
    return acc;
  }, []);
};
