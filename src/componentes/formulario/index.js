import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campoTexto'
import Lista from '../lista'
import './formulario.css'


const Formulario = (props) => {

   

    const formularioEviado = (event) => {
        event.preventDefault()
        props.aoCadastrarNovoProfessor  ({
            nomeProfessor: nome,
            especialidadeProfessor : especialidade,
            imagemProfessor: imagem,
            areaProfessor: area,
        })
        alteraNome('')
        alteraEspecialidade('')
        alteraImagem('')
    }

    const [nome, alteraNome] = useState('')
    const [especialidade, alteraEspecialidade] = useState('')
    const [imagem, alteraImagem] = useState('')
    const [area, alteraArea] = useState('')


    return (
        <form className='formulario' onSubmit={formularioEviado}>
            <h2>Preencha o formulário para se cadastrar</h2>
            <CampoTexto
                label="Nome Professor"
                placeholder="Digite seu nome"
                obrigatorio={true}
                valor = {nome}
                AlterarValor = {nome => alteraNome(nome)}
            />
            <CampoTexto 
                label="Especialidade" 
                placeholder="Defina sua especialidade"
                obrigatorio={true}
                valor = {especialidade}
                AlterarValor = {especialidade => alteraEspecialidade(especialidade)} 
            />
            <CampoTexto 
                label="Imagem" 
                placeholder="Insira url da imagem"
                valor = {imagem}
                AlterarValor = {imagem => alteraImagem(imagem)} 
            />
            <Lista 
                label="Áreas" 
                itens={props.times}
                obrigatorio={true}
                valor = {area}
                AlterarValor ={area => alteraArea(area)}
                 
            />
            <Botao valor="Cadastrar" />
        </form>
    )

}
export default Formulario