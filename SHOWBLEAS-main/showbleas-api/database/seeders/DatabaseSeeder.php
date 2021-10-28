<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\User;
use \Spatie\Permission\Models\Role;

/* Refrescar seed */
/* php artisan migrate:fresh --seed */

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            PermissionsSeeder::class,
        ]);

        $user = new User([
            'name' => 'Admin',
            'last_name' => 'Total',
            'email' => 'admin@gmail.com',
            'phone_number' => '3215465154',
            'address' => 'Calle 5 #7-04',
            'born_date' => '12/06/1999',
            'favorite_flavor' => 'Chocolate',
            'password' => bcrypt('1234'),
            'role' => 'admin'
        ]);
        $user->save();
        $role = Role::where('name', 'admin')->first();
        $user->assignRole($role);
        
        $user2 = new User([
            'name' => 'cliente',
            'last_name' => 'Prueba',
            'email' => 'cliente@gmail.com',
            'phone_number' => '3215465154',
            'address' => 'Calle 5 #7-04',
            'born_date' => '12/06/1999',
            'favorite_flavor' => 'Vanilla',
            'password' => bcrypt('1234'),
            'role' => 'cliente'
        ]);
        $user2->save();
        $role = Role::where('name', 'cliente')->first();
        $user2->assignRole($role);
    }
}
