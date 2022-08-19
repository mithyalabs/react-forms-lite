export const css = `
        label{
             margin-right:10px;
        }
        input[type=text],input[type=password]{
            flex-grow: 1;
            height: 100%;
            padding: 2px;
        }
        textarea{
            border:2px solid orange;
            flex-grow: 1;
            height: 40px;
            padding: 2px;
        }
        select{
          flex-grow: 1;
          height: 100%;
          cursor: pointer
        }
        input[type=radio],input[type=checkbox]{
          margin-right:10px
        }
        .email-input{
            border-radius:4px
        }
        .helperText{
          color:grey;
          font-size:12px;
          margin-top:3px
        }
    `;

export const valueStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
};
