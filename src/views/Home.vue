<template>
  <div class="home">
    <div v-if="message" class="modal">
      <div class="modal_container">
        <div class="modal_header">Возникла ошибка</div>

        <div class="modal_body">
          {{ message.status }}
        </div>
      </div>
    </div>
    <div class="main_block" v-else>
      <div class="top_section mdiv">
        <button
          class="cstmbut"
          @click="
            value = [];
            saved = [];
            countSaved = -1;
            maxSaved = false;
          "
        >
          Сбросить
        </button>
        <button class="cstmbut" :disabled="countSaved < 0" @click="backCl">
          Назад
        </button>
        <button
          class="cstmbut"
          :disabled="countSaved >= saved.length - 1"
          @click="forwardCl"
        >
          Вперед
        </button>
      </div>
      <div class="main_block_ins">
        <div class="main_block_body" v-if="splitArr">
          <div class="multiselect" v-for="(item, i) in splitArr" :key="i">
            <label>{{ typeof item[0] }} </label>
            <multiselect
              :value="value"
              :options="item"
              @select="selectNewItem($event)"
              @remove="removeNewItem($event)"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
            >
              <template slot="selection" slot-scope="{ values }">
                <span class="multiselect__single" v-if="values.length">
                  Выбрано {{ functype(values, i) }}
                </span>
              </template>
            </multiselect>
          </div>
        </div>
        <div class="main_block_body liststyle">
          <li v-for="item in value" :key="item.index">
            {{ item }}
          </li>
        </div>
      </div>
      <div class="secondary_block">
        <div class="secondary_block_ins" v-if="strsha256 != ''">
          <h4>SHA256</h4>
          {{ strsha256 }}
        </div>

        <div class="secondary_block_ins" v-if="mulres != ''">
          <h4>Multiplication</h4>
          {{ mulres }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import multiselect from "vue-multiselect";
export default {
  name: "Home",
  data() {
    return {
      message: null,
      flatArr: null,
      splitArr: null,
      value: [],

      saved: [],
      countSaved: -1,
      maxSaved: false,
    };
  },
  components: { multiselect },
  computed: {
    strsha256: function () {
      var sha256 = require("js-sha256");
      let res = "";
      for (let i = 0; i < this.value.length; i++) {
        if (typeof this.value[i] == "string") {
          res = res + this.value[i];
        }
      }
      if (res != "") return sha256(res);
      else return "";
    },
    mulres: function () {
      let res = 1,
        status = false;
      for (let i = 0; i < this.value.length; i++) {
        if (typeof this.value[i] == "number") {
          res = res * this.value[i];
          status = true;
        }
      }
      if (status) return res;
      else return "";
    },
  },
  methods: {
    functype(values, index) {
      let s = "",
        c = 0;

      switch (index) {
        case 0:
          s = "string";
          break;
        case 1:
          s = "number";
          break;
        case 2:
          s = "object";
          break;
        case 3:
          s = "boolean";
          break;

        default:
          break;
      }
      for (let i = 0; i < values.length; i++) {
        if (typeof values[i] == s) {
          c++;
        }
      }

      return c;
    },
    customFlatArrMethod(arr, result = []) {
      let value = null;
      for (let i = 0; i < arr.length; i++) {
        value = arr[i];
        if (Array.isArray(value)) {
          this.customFlatArrMethod(value, result);
        } else {
          result.push(value);
        }
      }
      return result;
    },
    customSplitArrMethod(arr) {
      let types = {},
        result = [],
        count = 0,
        index = null;

      for (let i = 0; i < arr.length; i++) {
        index = types[typeof arr[i]];
        if (index == undefined) {
          types[typeof arr[i]] = count++;
          index = types[typeof arr[i]];
        }
        if (!result[index]) {
          result.push([arr[i]]);
        } else {
          result[index].push(arr[i]);
        }
      }
      return result;
    },
    selectNewItem(event) {
      this.value.push(event);
      this.saved.push(JSON.parse(JSON.stringify(this.value)));
      this.countSaved++;
      if (this.countSaved > 10) {
        this.saved.shift();
        this.countSaved--;
        this.maxSaved = true;
      }
    },
    removeNewItem(event) {
      let newArr = [];
      for (let i = 0; i < this.value.length; i++) {
        if (this.value[i] != event) {
          newArr.push(this.value[i]);
        }
      }
      this.value = newArr;
      this.saved.push(JSON.parse(JSON.stringify(this.value)));
      this.countSaved++;
      if (this.countSaved > 10) {
        this.saved.shift();
        this.countSaved--;
        this.maxSaved = true;
      }
    },
    forwardCl() {
      this.value = this.saved[this.countSaved + 1];
      this.countSaved++;
    },
    backCl() {
      if (this.countSaved != 0) {
        this.value = this.saved[this.countSaved - 1];
        this.countSaved--;
        console.log("1");
      } else if (this.countSaved == 0 && !this.maxSaved) {
        this.value = [];
        this.countSaved--;
        console.log("2");
      } else if (this.countSaved == 0 && this.maxSaved) {
        this.value = this.saved[this.countSaved];
        this.countSaved--;
        console.log("3");
      }
    },
  },

  async mounted() {
    let res = await fetch(
      "https://raw.githubusercontent.com/WilliamRu/TestAPI/master/db.json"
    )
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
      })
      .catch(function (err) {
        return { status: err };
      });

    if (res.status) {
      this.message = res;
    }
    this.flatArr = this.customFlatArrMethod(res.testArr);
    this.splitArr = this.customSplitArrMethod(this.flatArr);
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mdiv {
  margin: 10px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(56, 56, 56, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal_container {
  background: #fff;
  border-radius: 6px;
  padding: 30px;
  width: 300px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
}
.modal_body {
  margin: 20px 0 0 0;
}
.multiselect {
  width: 80%;
  margin: 0 0 10px 0;
}
.main_block {
  width: 100%;
}
.main_block_ins {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.main_block_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.secondary_block {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.secondary_block_ins {
  width: 50%;
  padding: 10px 0;
  margin: 10px 0;
  border-radius: 6px;
  background: rgb(212, 211, 211);
  word-break: break-all;
}
.liststyle {
  border-radius: 6px;
  background: rgb(212, 211, 211);
  padding: 10px 0;
}
.cstmbut {
  height: 40px;
  padding: 10px;
  margin: 0 20px;
}
</style>
