import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }
    @Post()
    create(@Body() user: User) {
        return this.usersService.createUser(user);
    }

    @Get(':user_id')
    findOne(@Param('user_id') id: string) {
        return this.usersService.getUser(id);
    }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() userDto: User) {
    //     return this.usersService;
    // }

    @Delete(':user_id')
    remove(@Param('user_id') id: string) {
        return `we delete the user with the id ${id}`;
    }
}
