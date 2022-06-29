<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adocao;

class AdocaoController extends Controller
{
    public function index(){
        return Adocao::get();
    }
    /**
     * cria um novo registro de adoção enquanto verifica os campos de entrada do formulário
     * @param Request $request
     * @return Adocao
     */
    public function store(Request $request) {
        $request->validate([
            "email" => ['required', 'email'],
            "valor" => ['required', 'numeric', 'between:10,100'],
            "pet_id" => ['required', 'int', 'exists:pets,id']
        ]);


        $dadosDaAdocao = $request->all(); //método all trás todos os campos que foram enviados, automaticamente convertidos para campos de formulário 
        return Adocao::create($dadosDaAdocao);
    }
}