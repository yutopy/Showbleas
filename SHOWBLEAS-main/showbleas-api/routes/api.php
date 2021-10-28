<?php

use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleManager;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth', 'middleware' => 'cors'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('signup', [AuthController::class, 'signup']);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
        //Route::post('signup', [AuthController::class, 'signup'])->middleware(['role:admin']);
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    // Users end-points
    Route::get('/user', [UserController::class, 'index'])
        ->middleware(['permission:View All Users']);
    Route::get('/user/{user}', [UserController::class, 'show'])
        ->middleware(['permission:View All Users']);
    Route::post('/user', [UserController::class, 'store'])
        ->middleware(['permission:Create User']);
    Route::put('/user/{user}', [UserController::class, 'update'])
        ->middleware(['permission:Edit All Users']);
    Route::delete('/user/{user}', [UserController::class, 'destroy'])
        ->middleware(['permission:Delete User']);

    // Roles and permissions end-points
    Route::get('/permissions', [RoleManager::class, 'permissionsIndex'])
        ->middleware(['permission:View All Permissions']);
    Route::get('/roles', [RoleManager::class, 'rolesIndex'])
        ->middleware('permission:View All Roles');
    Route::post('/roles', [RoleManager::class, 'rolesStore'])
        ->middleware('permission:Create Role');
    Route::post('/roles/{role}/assign/{user}', [RoleManager::class, 'rolesAddUser'])
        ->middleware('permission:Assign Role');
    Route::post('/roles/{role}/unassign/{user}', [RoleManager::class, 'rolesRemoveUser'])
        ->middleware('permission:Unassign Role');

    // Registrar Adulto
    Route::post('/registrar-adulto', [ProfileSheetController::class, 'registrarAdulto'])
        ->middleware(['permission:Subir archivo PE04']);
    
    Route::post('/ficha-ingreso', [FichaIngresoController::class, 'registrarIngreso'])
        ->middleware(['permission:Analisis PE04']);


    // end-points para el rol de médico
    Route::get('/listar-adultos', [AdultoDoctorController::class, 'listarAdultos'])
        ->middleware(['permission:Analisis PE04']);

    // Route::get('/listar-adultos', [VehicleController::class, 'listarAdultos'])
    // ->middleware(['permission:Subir archivo PE04']);

    // Route::get('/listar-adultos', [VehicleController::class, 'listarAdultos'])
    // ->middleware(['permission:Subir archivo PE04']);

    // Route::get('/listar-adultos', [VehicleController::class, 'listarAdultos'])
    //     ->middleware(['permission:Subir archivo PE04']);


    //end-point rol  adulto mayor
    Route::post('/estado-animo',[EstadoAnimoController::class, 'reporteEstadoAnimo'])
        ->middleware(['permission:Subir archivo PE04']);

    Route::get('/info-acudiente');



    
    // end-points administrador

        //Crear producto
    Route::post('/create-product-admin', [ProductController::class, 'store'])
        ->middleware(['permission:Subir archivo PE04']);

    // Route::get('/validar-usuarios', [UserController::class, 'validarUsuarios'])
    //     ->middleware(['permission:Subir archivo PE04']);

    // Route::get('/verificar-usuarios', [UserController::class, 'verificarUsuarios'])
    //     ->middleware(['permission:Subir archivo PE04']);

    // Route::post('/rechazar-usuario', [UserController::class, 'rechazarUsuario'])
    //     ->middleware(['permission:Subir archivo PE04']);

    // Route::post('/aceptar-usuario', [UserController::class, 'aceptarUsuario'])
    //     ->middleware(['permission:Subir archivo PE04']);

        //Validar solicitudes


    Route::get('/cargar-solicitudes', [FichaIngresoController::class, 'cargarSolicitudes'])
        ->middleware(['permission:Subir archivo PE04']);

    Route::post('/rechazar-solicitud', [FichaIngresoController::class, 'rechazarSolicitud'])
        ->middleware(['permission:Subir archivo PE04']);

    Route::post('/aceptar-solicitud', [FichaIngresoController::class, 'aceptarSolicitud'])
        ->middleware(['permission:Subir archivo PE04']);

    //Route::post('/ajustar-valores', [ReadingController::class, 'ajustesMoto'])
    //->middleware(['permission:Subir archivo PE04']);

                
/*
    Route::get('/pe04/centro/{centro}/titulada', [Pe04Controller::class, 'obtenerTitulada'])
        ->middleware(['permission:Analisis PE04']);
    Route::get('/pe04/centro/{centro}/complementaria', [Pe04Controller::class, 'obtenerComplementaria'])
        ->middleware(['permission:Analisis PE04']);

        //Listar las fichas activas. Recibe el código del centro
    Route::get('/pe04/fichas-activas/{codigo_centro}', [Pe04Controller::class, 'listarFichasActivas'])
    ->middleware(['permission:Ver fichas activas']);

    // Registro Calificado
    Route::post('/registro-calificado/import', [RegistroCalificadoController::class, 'import'])
        ->middleware(['permission:Cargar registro calificado']);

    // Aprobar programa indicativa
    
        // Cargar acta regional indicativa (incluye aprobacion regional)
    Route::put('/programacion-indicativa/cargar-acta', [CatalogoIndicativaController::class, 'anexarActa'])
        ->middleware(['permission:Anexar acta']);

        // Aprobacion centro
    Route::put('/programacion-indicativa/aprobar-centro', [CatalogoIndicativaController::class, 'aprobarCentro'])
        ->middleware(['permission:Aprobar programa indicativa']);

        // Aprobacion nacional
    Route::put('/programacion-indicativa/aprobar-nacional', [CatalogoIndicativaController::class, 'aprobarNacional'])
    ->middleware(['permission:Aprobar programa indicativa']);

        // Rechazar Regional
    Route::put('/programacion-indicativa/rechazar-regional', [CatalogoIndicativaController::class, 'rechazarRegional'])
    ->middleware(['permission:Aprobar programa indicativa']);

        // Rechazar Nacional
    Route::put('/programacion-indicativa/rechazar-nacional', [CatalogoIndicativaController::class, 'rechazarNacional'])
    ->middleware(['permission:Aprobar programa indicativa']);

    */
});
