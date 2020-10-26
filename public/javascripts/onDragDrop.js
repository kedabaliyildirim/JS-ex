function dragStart(dragStartDo) {
    dragStartDo
      .dataTransfer
      .setData('text/plain', dragStartDo.target.id);
  
    dragStartDo
      .currentTarget
      .style
      .backgroundColor = 'yellow';
  }