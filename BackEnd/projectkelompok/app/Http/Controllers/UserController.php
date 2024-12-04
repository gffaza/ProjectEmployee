<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Auth;
class UserController extends Controller
{
    //
    function halo(){
        $response = [];
        $response['sukses'] = 1;
        $response['message'] = "Halo dunia dari laravel";
        return json_encode($response);
    }

    function register(Request $request){
        $response = [];
        $rules = [
            "nama" => "required",
            "email" => "required|email|unique:users,email",
            "password" => "required",
            "ulangi" => "required|same:password",
            "telp" => "required|digits_between:10,12"

        ];
        $attributes = [
            "nama" => "Nama Anda",
            "email" => "Email Anda",
            "password" => "Password Anda",
            "ulangi" => "Ulangi Password",
            "telp" => "Telp Anda"
        ];
        $messages = [
            "unique" => ":attribute sudah terdaftar",
            "required" => ":attribute harus diisi",
            "email" => ":attribute harus berupa email",
            "same" => ":attribute harus sama dengan :other",
            "digits_between" => ":attribute harus antara :min dan :max digit"
        ];

        $val = Validator::make($request->all(), $rules, $messages, $attributes);
        if ($val ->fails()){
            $response['sukses'] = 0;
            $response['message'] = $val->errors();
        }else{
            $response['sukses'] = 1;
            $response['message'] = "Registrasi berhasil, terima kasih ".$request->input('nama');
            User::create([
                "name" => $request->input('nama'),
                "email" => $request->input('email'),
                "telp" => $request->input('telp'),
                "password" => bcrypt($request->input('password'))
            ]);
            $response['sukses'] = 1;
            $response['message'] = "Registrasi berhasil, terima kasih ".$request->input('nama');
        }

        return json_encode($response);

}

function login(request $request){
    $response = [];
    $data = Auth::attempt(['email' => $request->email, 'password' => $request->password]);
    if ($data){
        $user = Auth::user();
        $response["sukses"] = 1;
        $response["pesan"] = "Selamat Datang ".$user->name;
        $response["data"] = [
            "access_token" =>"Bearer ".$user->createToken('bebas')->plainTextToken,
            "user" => $user
        ];

        }else{
        $response["sukses"] = 0;
        $response["pesan"] = "Email dan password salah";
    }
    return json_encode($response);


}


}
