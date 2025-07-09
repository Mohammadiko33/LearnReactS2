import React, { useEffect } from 'react'

export default function useUpdater(value) { useEffect(() => console.log("your input value but batter of wave 1: "+value), [value]) }