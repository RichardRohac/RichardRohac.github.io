import { useEffect } from 'react';
import { Container, Divider, Grid, Header, Icon, Menu, Segment } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  useEffect(() => {
    document.title = "Home | Richard Rohac"
  }, []);

  return (
    <Container fluid={true}>
      <Container>
        <Menu inverted={true} pointing={true} secondary={true}>
          <Menu.Item name='Home' active={true}/>
        </Menu>
        <title>Richard Rohac | Home</title>
        <Grid stackable={true} className='main-content'>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header size='medium' inverted={true}>
                <a href='mailto:website@richardrohac.net'><Icon link={true} name='mail'/> e-mail</a>
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header size='medium' inverted={true}>
                <a href='https://github.com/RichardRohac' target='_blank'><Icon link={true} name='github'/> GitHub</a>
              </Header>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header size='medium' inverted={true}>
                <a href='https://uk.linkedin.com/in/richard-rohac' target='_blank'><Icon link={true} name='linkedin'/> LinkedIn</a>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider inverted={true}/>
        </Grid>
      </Container>
      <Container className='footer-content secondary-text'>
        &#169; Richard Rohac | 2021
      </Container>
    </Container>
  );
}

export default App;
