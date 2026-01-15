 
// import { IsEnum, IsNotEmpty, IsNumber, IsBoolean, IsOptional, IsDateString, IsUUID, IsEmail, ValidateIf } from 'class-validator';
// import { DepartmentType } from './department.entity';

import { IsBoolean, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { DepartmentType } from "./department.entity";

// export class CreateDepartmentDto {
//   @IsEnum(DepartmentType)
//   departmentType: DepartmentType;

//   @IsNotEmpty()
//   role: string;

//   @IsNumber()
//   employeeId: number;

// //   @IsUUID()
// //   adminId: string;

// @IsUUID()
// adminId: number;

//   @IsOptional()
//   @IsDateString()
//   joiningDate?: Date;

//   @IsOptional()
//   @IsBoolean()
//   isActive?: boolean;
//     static email: any;
// }

// export class UpdateDepartmentDto {
//   @IsOptional()
//   @IsEnum(DepartmentType)
//   departmentType?: DepartmentType;

//   @IsOptional()
//   role?: string;

//   @IsOptional()
//   @IsNumber()
//   employeeId?: number;

//   @IsOptional()
//   @IsDateString()
//   joiningDate?: Date;

//   @IsOptional()
//   @IsBoolean()
//   isActive?: boolean;


//   @IsOptional()
//   @IsEmail()
//   email?: string;

//    @ValidateIf(o => !o.employeeId && !o.email)
//   @IsNotEmpty({ message: 'Either employeeId or email must be provided' })
//   _?: never;

// }

// department.dto.ts
export class CreateDepartmentDto {
  @IsEnum(DepartmentType)
  departmentType: DepartmentType;

  @IsNotEmpty()
  role: string;

  @IsNumber()
  employeeId: number;

  @IsEmail()  // ← Use email instead of ID
  @IsNotEmpty()
  adminEmail: string;  // ← Change from adminId to adminEmail

  @IsOptional()
  @IsDateString()
  joiningDate?: Date;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateDepartmentDto {
  @IsOptional()
  @IsEnum(DepartmentType)
  departmentType?: DepartmentType;

  @IsOptional()
  role?: string;

  @IsOptional()
  @IsNumber()
  employeeId?: number;

  @IsOptional()
  @IsEmail()
  adminEmail?: string;  // ← Add email for updates too

  @IsOptional()
  @IsDateString()
  joiningDate?: Date;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}