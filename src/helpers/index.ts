/**
 * Remove duplicate id in array of objects
 * @param array Array of objects with ID
 * @returns Array of objects without duplicate IDs
 */

export function removeDuplicatesById(array: any) {
    let uniq = {};
    
    // @ts-ignore
    return array.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
  }