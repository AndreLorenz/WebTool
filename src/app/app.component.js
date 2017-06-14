import template from './app.html';
import TreeModel from 'tree-model';
class AppController {
  constructor () {
    this.tree = [];
    this.loadFiles();
    this.liinha = 20;
    const treeModel = new TreeModel();
    this.treeFolder = treeModel.parse({ name: 'CorCtbF4', children: this.tree });
  }

  onClike (file) {
    this.contentRows = file.content.split('\n').length;
    this.content = file.content;
    this.uid = file.uid;
  }

  save () {
    this.allowEdit = false;
    this.saveFile(this.tree);

  }

  saveFile (tree) {
    return tree.find(value => {
      if (value.uid === this.uid) return value.content = this.content;
      return this.saveFile(value.children);
    });
  }

  loadFiles (){
    var line1 = {
      src    : `components\\items\\schedule\\integrated\\integrated.wdbp.js`,
      content: `Teste de conteudo bla bla bla1 `
    };
    var line2 = {
      src    : `components\\items\\schedule\\medical\\cardio\\cardio-medical.wdbp.js`,
      content: `Teste de conteudo bla bla bla2 `
    };
    var line3 = {
      src    : `components\\items\\schedule\\patient\\integrated\\patient.wdbp.js`,
      content: `Teste de conteudo bla bla bla3 `
    };
    var line4 = {
      src    : `components\\items\\integrated\\integrated\\school\\school.wdbp.js`,
      content: `Teste de conteudo bla bla bla4 `
    };
    var line5 = {
      src    : `components\\items\\medical\\person\\person.wdbp.js`,
      content: `Teste de conteudo bla bla bla5 `
    };
    var line6 = {
      src    : `components\\external-access\\external-access.js`,
      content: `findFolder (lines, content, i, childrenPath = this.tree) {
                 if (lines.length === i) return;
             var children = childrenPath.find((value) => value.name === lines[i]);
            if (children) this.findFolder(lines, content, ++i, children.children);
    else {
      let index = 0;
              if (lines.length - 1 === i) {
        index = childrenPath.push({
          name: lines[i],
          content: content,
          children: []
        });
      } else {
        index = childrenPath.push({
          name: lines[i],
          children: []
        });
      }
      this.findFolder(lines, content, ++i, childrenPath[index - 1].children);
    }

  }`
    };
    var line7 = {
      src    : `README.md`,
      content: `Teste de conteudo bla bla bla7 `
    };
    var lines = [];
    lines.push(line1, line2, line3, line4, line5, line6, line7);
    lines.forEach(line => {
      const lineFields = line.src.split(`\\`);
      this.findFolder(lineFields, 0, line);
    });
  }


  findFolder (lineFields, i, line, childrenPath = this.tree) {
    if (lineFields.length === i) return;
    var children = childrenPath.find((value) => value.name === lineFields[i]);
    if (children) this.findFolder(lineFields, ++i, line, children.children);
    else {
      let index = 0;
      if (lineFields.length - 1 === i) {
        index = childrenPath.push({
          name: lineFields[i],
          content: line.content,
          src: line.src,
          children: []
        });
      } else {
        index = childrenPath.push({
          name: lineFields[i],
          children: []
        });
      }
      this.findFolder(lineFields, ++i, line, childrenPath[index - 1].children);
    }

  }
}

export default {
  template  : template,
  controller: AppController
};