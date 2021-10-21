class BaseUserDto {
  firstName: string;
  lastName: string;
  email: String;
  password: String;

}

export class CreateUserDto extends BaseUserDto {}

