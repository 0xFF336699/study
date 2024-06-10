import React, { createContext, Dispatch, ReactElement, useContext, useReducer } from 'react';

const ContextA = createContext<number[]|null>(null);
const ContextB = createContext<Dispatch<{ type:string, data:number}>|null>(null)

function contextAReducer(tasks:number[], action:{type:string, data:number}){
  switch (action.type){
    case 'add':
      return [...tasks, action.data]
    default:
      throw new Error('no type matched')
  }
}

function useTasks(){
  const context = useContext(ContextA);
  if(!context){
    throw new Error('not intialized')
  }
  return context;
}

function useDispatch(){
  const context = useContext(ContextB);
  if(!context){
    throw new Error('not intialized')
  }
  return context;
}
export function ContextComponent({children, initTasks}:{children:ReactElement[], initTasks:number[]}){
  const [state, dispatch] = useReducer(contextAReducer, initTasks);
  return(
    <ContextA.Provider value={state}>
      <ContextB.Provider value={dispatch}>

        <div>
          <h1>aaa</h1>
          {children}
        </div>
      </ContextB.Provider>
    </ContextA.Provider>
  )
}

export function ContextAdd(){
  const dispatch = useDispatch();
  return(
    <div>
      <button onClick={()=>{dispatch({type:"add", data:Date.now()})}}>add</button>
    </div>
  )
}
export function ContextItemList(){
  const tasks = useTasks()
  return(
    <div>
      <div>sx</div>
      {tasks.map((task, index)=><div key={index.toString()}>{task}</div>)}
    </div>
  )
}

export function ContextTest(){
  const list1 = [1, 2]
  const list2 = [3,4];
  return (
    <>
      <ContextComponent initTasks={list1}>
        <ContextAdd />
        <ContextItemList />
      </ContextComponent>
      <ContextComponent initTasks={list2}>
        <ContextAdd />
        <ContextItemList />
      </ContextComponent>
    </>
  )
}