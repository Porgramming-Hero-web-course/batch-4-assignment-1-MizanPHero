function removeDuplicates(numbers: number[]): number[] {
  const result: number[] = [];

  for (const number of numbers) {
    if (!result.includes(number)) {
      result.push(number);
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
