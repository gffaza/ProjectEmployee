<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use App\Models\Pegawai;

class PegawaiController extends Controller
{
    
    
    // Tambah pegawai
    function tambahPegawai(Request $request)
    {
        $response = [];
        $rules = [
            "nama" => "required",
            "email" => "required|email|unique:pegawai,email", // Menggunakan tabel pegawai
            "tgl_lahir" => "required|date",
            "telp" => "required|digits_between:10,12",
            "onboard" => "required",
            "position" => "required",
            "role" => "required",
            "departmen" => "required",
            "group" => "required",
            "lokasi_kerja" => "required",
            "image" => "required|image|mimes:jpeg,png,jpg,gif,svg|max:2048"
        ];
        $attributes = [
            "nama" => "Nama Lengkap",
            "email" => "Email",
            "tgl_lahir" => "Tanggal Lahir",
            "telp" => "No Telepon",
            "onboard" => "Onboarding",
            "position" => "Posisi",
            "role" => "Peran",
            "departmen" => "Departemen",
            "group" => "Grup",
            "lokasi_kerja" => "Lokasi Kerja",
            "image" => "Foto Pegawai"
        ];
        $messages = [
            "unique" => ":attribute sudah terdaftar",
            "email" => ":attribute harus berupa email",
            "required" => ":attribute harus diisi",
            "image" => ":attribute harus berupa gambar",
            "date" => ":attribute harus berupa tanggal",
            "mimes" => ":attribute harus memiliki format jpeg, png, jpg, gif, atau svg",
            "max" => ":attribute maksimal :max kilobytes"
        ];

        $val = Validator::make($request->all(), $rules, $messages, $attributes);
        if ($val->fails()) {
            $response['gagal'] = 0;
            $response['message'] = $val->errors();
        } else {
            $foto = $request->file('image');
            $nama_file = $foto->getClientOriginalName();
            $foto->move("img/pegawai/", $nama_file);
            Pegawai::create([
                "nama" => $request->nama,
                "email" => $request->email,
                "tgl_lahir" => Carbon::parse($request->tgl_lahir),
                "telp" => $request->telp,
                "onboard" => $request->onboard,
                "position" => $request->position,
                "role" => $request->role,
                "departmen" => $request->departmen,
                "group" => $request->group,
                "lokasi_kerja" => $request->lokasi_kerja,
                "image" => $nama_file,
            ]);
            $response['sukses'] = 1;
            $response['message'] = "Data Pegawai berhasil ditambahkan";
        }
        return json_encode($response);
    }

    // List pegawai
    function listPegawai()
    {
        $response = [];
        $data = Pegawai::all();
        $response['sukses'] = 1;
        $response['data'] = $data;
        return json_encode($response);
    }

    //filter pegawai

    function filterPegawai(Request $request)
{
    $response = [];

    // Validasi input filter
    $rules = [
        'position' => 'nullable|string',
        'role' => 'nullable|string',
        'group' => 'nullable|string',
        'departmen' => 'nullable|string',
    ];
    $validator = Validator::make($request->all(), $rules);

    if ($validator->fails()) {
        $response['sukses'] = 0;
        $response['message'] = $validator->errors();
        return response()->json($response);
    }

    // Query dengan filter yang diberikan
    $query = Pegawai::query();

    if ($request->has('position')) {
        $query->where('position', $request->position);
    }
    if ($request->has('role')) {
        $query->where('role', $request->role);
    }
    if ($request->has('group')) {
        $query->where('group', $request->group);
    }
    if ($request->has('departmen')) {
        $query->where('departmen', $request->departmen);
    }

    $data = $query->get();

    // Cek jika ada data
    if ($data->isEmpty()) {
        $response['sukses'] = 0;
        $response['message'] = "Tidak ada pegawai yang sesuai dengan filter";
    } else {
        $response['sukses'] = 1;
        $response['data'] = $data;
    }

    return response()->json($response);
}

    // Detail pegawai
    function detailPegawai($id_pegawai)
    {
        $response = [];
        $data = Pegawai::find($id_pegawai);
        if ($data) {
            $response['sukses'] = 1;
            $response['data'] = $data;
        } else {
            $response['sukses'] = 0;
            $response['message'] = "Pegawai tidak ditemukan";
        }
        return json_encode($response);
    }

    // Hapus pegawai
    function hapusPegawai($id_pegawai)
    {
        $response = [];
        $data = Pegawai::find($id_pegawai);
        if ($data) {
            $data->delete();
            $response['sukses'] = 1;
            $response['message'] = "Pegawai berhasil dihapus";
        } else {
            $response['sukses'] = 0;
            $response['message'] = "Pegawai tidak ditemukan";
        }
        return json_encode($response);
    }

    // Ubah pegawai
    function ubahPegawai($id_pegawai, Request $request)
    {
        $response = [];
        $rules = [
            "nama" => "required",
            "email" => "required|email|unique:pegawai,email", // Tambahkan pengecualian id
            "tgl_lahir" => "required|date",
            "telp" => "required|digits_between:10,12",
            "onboard" => "required",
            "position" => "required",
            "role" => "required",
            "departmen" => "required",
            "group" => "required",
            "lokasi_kerja" => "required",
            "image" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048"
        ];
        $attributes = [
            "nama" => "Nama Lengkap",
            "email" => "Email",
            "tgl_lahir" => "Tanggal Lahir",
            "telp" => "No Telepon",
            "onboard" => "Onboarding",
            "position" => "Posisi",
            "role" => "Peran",
            "departmen" => "Departemen",
            "group" => "Grup",
            "lokasi_kerja" => "Lokasi Kerja",
            "image" => "Foto Pegawai"
        ];
        $messages = [
            "unique" => ":attribute sudah terdaftar",
            "email" => ":attribute harus berupa email",
            "required" => ":attribute harus diisi",
            "image" => ":attribute harus berupa gambar",
            "date" => ":attribute harus berupa tanggal",
            "mimes" => ":attribute harus memiliki format jpeg, png, jpg, gif, atau svg",
            "max" => ":attribute maksimal :max kilobytes"
        ];

        $val = Validator::make($request->all(), $rules, $messages, $attributes);
        if ($val->fails()) {
            $response['sukses'] = 0;
            $response['message'] = $val->errors();
        } else {
            $pegawai = Pegawai::find($id_pegawai);
            if ($pegawai) {
                $pegawai->nama = $request->nama;
                $pegawai->email = $request->email;
                $pegawai->tgl_lahir = Carbon::parse($request->tgl_lahir);
                $pegawai->telp = $request->telp;
                $pegawai->onboard = $request->onboard;
                $pegawai->position = $request->position;
                $pegawai->role = $request->role;
                $pegawai->departmen = $request->departmen;
                $pegawai->group = $request->group;
                $pegawai->lokasi_kerja = $request->lokasi_kerja;
                if ($request->hasFile('image')) {
                    $foto = $request->file('image');
                    $nama_file = $foto->getClientOriginalName();
                    $foto->move("img/pegawai/", $nama_file);
                    $pegawai->image = $nama_file;
                }
                $pegawai->save();
                $response['sukses'] = 1;
                $response['message'] = "Pegawai berhasil diubah";
            } else {
                $response['sukses'] = 0;
                $response['message'] = "Pegawai tidak ditemukan";
            }
        }
        return json_encode($response);
    }
}
