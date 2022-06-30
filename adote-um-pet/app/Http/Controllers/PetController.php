<?php

namespace App\Http\Controllers;

use App\Http\Requests\PetRequest;
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


    /**
     * Cria um pet no banco de dados
     * 
     * @param PetRequest $request
     * @return Pet
     */
    public function store(PetRequest $request){
        
        $dadosDoPet = $request->all();

        //dd($dadosDoPet); //this function return to us the inside of the variable in its argument

        return Pet::create($dadosDoPet);
    }
}
