/**
 * Formats the given datetime string
 * @param datetimeStr
 * @returns
 */
export const formatDatetimeStr = (datetimeStr: string) => {
  const datetime = new Date(datetimeStr);
  return `${datetime.toLocaleDateString("sl")} @ ${datetime.toLocaleTimeString(
    "sl"
  )}`;
};

export const makeGroupsOf = (items: any[], groupSize: number) => {
  let curGroupIdx = 0;
  const groupedItems = [];

  for (let i = 0, j = 0; i < items.length; i++, j++) {
    const item = items[i];
    if (j === groupSize) {
      j = 0;
      curGroupIdx++;
    }

    if (!groupedItems[curGroupIdx]) {
      groupedItems[curGroupIdx] = [];
    }

    const curGroup = groupedItems[curGroupIdx];

    curGroup.push(item);
  }

  return groupedItems;
};
