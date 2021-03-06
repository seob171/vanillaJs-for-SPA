import Components from './core/Components.js';
import router from './router.js';
import { $ } from './util/util.js';
import Header from './components/Header/Header.js';

export default class App extends Components {
  constructor(props) {
    super(props);
  }

  async initialState() {
    this.setState({});
  }

  template() {
    return `
      <div class="container">
        <section id="header"></section>
        <section id="app"></section>
      </div>
    `;
  }

  async componentDidMount() {
    window.onload = async () => {
      const view = await router();
      view && new view($('#app'));
    };
    new Header($('#header'));
  }
}
