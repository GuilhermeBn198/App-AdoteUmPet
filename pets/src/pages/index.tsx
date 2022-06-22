import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import List from '../ui/components/List/List';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'
const Home: NextPage = () => {
  const {
    listaPets
  } = useIndex();

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
      />


      <Dialog //cria a mensagem q se expande quando clicamos em adotar 1 pet
        open={false}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField //gera o campo bonitinho de input do usuario
              label={'E-mail'}
              type={"email"} //definir essa propriedade ajuda na hora da visualização por smartphone, quando a pessoa clica no campo abre o teclado padrão
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField //gera o campo bonitinho de input do usuario
              label={'Quantia por mês'}
              type={'number'} //enquanto que aqui abrirá o teclado numerico
              fullWidth
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button
            color={'secondary'}
          >
            Cancelar!
          </Button>
          <Button
            variant={'contained'}
          >
            Confirmar Adoção!
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
      open = {false}
      message = {'aaaaaaaaaaaaa'}
      />

    </div>
  )
}

export default Home
