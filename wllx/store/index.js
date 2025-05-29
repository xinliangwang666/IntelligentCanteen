import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart: {
      state: {
        items: []
      },
      getters: {
        cartItems: state => state.items,
        totalPrice: state => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      },
      mutations: {
        ADD_ITEM(state, item) {
          const existing = state.items.find(i => i.id === item.id);
          if (existing) {
            existing.quantity += item.quantity;
          } else {
            state.items.push(item);
          }
        },
        UPDATE_QUANTITY(state, { id, quantity }) {
          const item = state.items.find(i => i.id === id);
          if (item) {
            item.quantity += quantity;
            if (item.quantity <= 0) {
              state.items = state.items.filter(i => i.id !== id);
            }
          }
        }
      },
      actions: {
        addItem({ commit }, item) {
          commit('ADD_ITEM', item);
        },
        updateQuantity({ commit }, { id, quantity }) {
          commit('UPDATE_QUANTITY', { id, quantity });
        }
      }
    }
  }
});