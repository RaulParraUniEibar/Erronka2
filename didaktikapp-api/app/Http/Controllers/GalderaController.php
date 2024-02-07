<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Galdera;


class GalderaController extends Controller
{
    
    public function index()
    {
        return Galdera::all();
    }

    public function store(Request $request)
    {
        $galdera = Galdera::create($request->all());

        return  response()->json($galdera,201);
    }

    public function show(Galdera $galdera)
    {
        return $galdera;
    }
    public function update(Request $request, Galdera $galdera)
    {
        $galdera->update($request->all());
        return response()->json($galdera,200);
    }
    public function delete(Galdera $galdera)
    {
        $galdera->delete($request->all());
        return response()->json(null, 204);
    }
}
