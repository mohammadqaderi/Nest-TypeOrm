export class UserDto {
  name: string;
  email: string;
  age: number;
  phone: number;

  constructor(
    private readonly newName: string,
    private readonly newEmail: string,
    private readonly newAge: number,
    private readonly newPhone: number,
  ) {}
}
