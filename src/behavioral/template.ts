abstract class Builder {
  abstract test(): string;
  abstract lint(): string;
  abstract assemble(): string;
  abstract deploy(): string;

  build(): string {
    return `${this.test()} ${this.lint()} ${this.assemble()} ${this.deploy()}`;
  }
}

export class AndroidBuilder extends Builder {
  test(): string {
    return "Testing Android";
  }
  lint(): string {
    return "Linting Android";
  }
  assemble(): string {
    return "Assembling Android";
  }
  deploy(): string {
    return "Deploying Android";
  }
}

export class IosBuilder extends Builder {
  test(): string {
    return "Testing iOS";
  }
  lint(): string {
    return "Linting iOS";
  }
  assemble(): string {
    return "Assembling iOS";
  }
  deploy(): string {
    return "Deploying iOS";
  }
}

const androidBuilder = new AndroidBuilder();
const iosBuilder = new IosBuilder();

const androidBuildResult = androidBuilder.build();
const iosBuildResult = iosBuilder.build();

console.log(androidBuildResult); // Output: "Testing Android Linting Android Assembling Android Deploying Android"
console.log(iosBuildResult); // Output: "Testing iOS Linting iOS Assembling iOS Deploying iOS"
