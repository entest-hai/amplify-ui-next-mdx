const CustomCode = (props) => {
  return <code style={{ backgroundColor: 'lightblue'}} {...props}></code>
}

const MDXComponents = {
  p: (props) => <p style={{fontSize: '20px', color: 'aqua'}} {...props}></p>,
  inlineCode: CustomCode
}

export default MDXComponents; 