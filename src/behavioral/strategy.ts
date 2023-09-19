export class Sort {
  sort(arr: number[]): string {
    if (arr.length > 5) {
      return this.quickSort(arr);
    } else return this.bubbleSort(arr);
  }

  quickSort(arr: number[]): string {
    return `Quick sorted: ${this.quickSortInternal(arr)}`;
  }

  quickSortInternal(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [
      ...this.quickSortInternal(left),
      pivot,
      ...this.quickSortInternal(right),
    ];
  }

  private bubbleSort(originalArray: number[]): string {
    const array = [...originalArray];
    let arrayLength = array.length;
    let swapped: boolean;

    do {
      swapped = false;
      for (let i = 0; i < arrayLength - 1; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }
      arrayLength--;
    } while (swapped);

    return `Bubble sorted: ${array}`;
  }
}
