/** Group iterable elements with a custom group key getter
 * and return the results in a Map-Set */
export function mapSetGroupBy<El, GroupKey>(
  iter: Iterable<El>,
  getGroupKey: (el: El) => GroupKey
): Map<GroupKey, Set<El>> {
  const map: Map<GroupKey, Set<El>> = new Map()

  for (const el of iter) {
    const groupKey = getGroupKey(el)
    let group = map.get(groupKey)

    if (group === undefined) {
      group = new Set<El>()
      map.set(groupKey, group)
    }

    group.add(el)
  }

  return map
}
