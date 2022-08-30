import React, { useState } from "react";
import { View } from "react-native";
import { NewTask } from "../../components/NewTask";
import { Tasks } from "../../components/Tasks";
import { TasksContextProvider } from "../../contexts/TasksContext";





export function Home() {
  return (
    <View style={{ flex: 1 }}>
      <TasksContextProvider>
        <NewTask />
        <Tasks />
      </TasksContextProvider>
    </View>
  )
}