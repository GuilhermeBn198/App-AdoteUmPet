<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;

class PetController extends Controller
{
    /**
     * esse método retorna a lista de pets cadastrados
     * @return Collection
    */
    public function index() {
        return Pet::get();
    }
}
