<?php
/*Run php artisan migrate:fresh --seed --seeder=PermissionsSeeder*/
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            "Create User",
            "Delete User",
            "Create Role",
            "View All Users",
            "Edit All Users",
            "Assign Role",
            "Unassign Role",
            "View All Permissions",
            "View All Roles",
            "Subir archivo PE04",
            "Analisis PE04",
            "Ver fichas activas",
            "Adicionar al catalogo titulada",
            "Adicionar al catalogo complementaria",
            "Modificar catalogo",
            "Exportar catalogo excel",
            "Ver catalogo Titulada",
            "Ver catalogo complementaria",
            "Ver catálogo programa actual",
            "Aprobar programa indicativa",
            "Anexar acta",
            "Cargar indice pertinencia",
            "Cargar indice desercion",
            "Cargar registro calificado",
            "Visualizar acta",
            "Buscar centro",
            "Buscar programa",
            "Subir archivo metas",
            "Buscar por red conocimiento",
            "Reporte nacional por secciones",
            "Subir archivo catálogo indicativa",
            "Anexar acta asociada paquete programas",
            "Visualizar actas paquetes programas"
        ];

        $adminRole = Role::updateOrCreate(['name' => 'admin', 'guard_name' => 'api']);

        // create permissions
        foreach ($permissions as $perm_name) {
            $permission = Permission::updateOrCreate(['name' => $perm_name,
                'guard_name' => 'api']);

            $adminRole->givePermissionTo($perm_name);
        }

        // Se crea el rol de cliente
        $roleUser = Role::updateOrCreate(['name' => 'cliente', 'guard_name' => 'api']);
        $roleUser->givePermissionTo('View All Users');
        

        // 
        $roleUser = Role::create(['name' => 'user', 'guard_name' => 'api']);
        $roleUser->givePermissionTo('View All Users');

    }
}
