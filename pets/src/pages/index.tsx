import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'
const Home: NextPage = () => {
  const {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
		setEmail,
		valor,
		setValor,
    mensagem,
    setMensagem,
    adotar
  } = useIndex();

  // console.log(listaPets)
  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br/>
            pode <strong>adotar</strong> um pet virtualmente
          </span>
                }/>
      <List
        pets={listaPets}
        onSelect={(pet) => setPetSelecionado(pet)}
      />


      <Dialog //cria a mensagem q se expande quando clicamos em adotar 1 pet
        open={petSelecionado !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelecionado(null)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField //gera o campo bonitinho de input do usuario
              label={'E-mail'}
              type={"email"} //definir essa propriedade ajuda na hora da visualização por smartphone, quando a pessoa clica no campo abre o teclado padrão
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField //gera o campo bonitinho de input do usuario
              label={'Quantia por mês'}
              type={'number'} //enquanto que aqui abrirá o teclado numerico
              fullWidth
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button
            color={'secondary'}
            onClick={() => setPetSelecionado(null)}
          >
            Cancelar!
          </Button>
          <Button
            variant={'contained'}
            onClick={() => adotar()}
          >
            Confirmar Adoção!
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
      open = {mensagem.length > 0}
      message = {mensagem}
      autoHideDuration={2500}
      onClose={() => setMensagem('')}
      />

    </div>
  )
}

export default Home
