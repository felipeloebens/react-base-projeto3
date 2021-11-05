import React from 'react';
import ReactDOM from 'react-dom';
import ListarMoedas from './listar-moedas';

describe('teste do componente de listar moedas', () => {
    it('deve renderize o componente sem erros', () => {
        const div= document.createElement('div');
        ReactDOM.render(<ListarMoedas/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
});