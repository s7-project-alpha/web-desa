<?php

namespace App\Http\Controllers;

use App\Models\VisionMissionValue;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VisionMissionValueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = VisionMissionValue::ordered()->get()->groupBy('type');

        return Inertia::render('VisionMissionValues/Index', [
            'visions' => $items->get('vision', collect()),
            'missions' => $items->get('mission', collect()),
            'values' => $items->get('value', collect()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('VisionMissionValues/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:vision,mission,value',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'description' => 'nullable|string',
            'order_position' => 'required|integer|min:0',
            'is_active' => 'boolean',
        ]);

        VisionMissionValue::create($request->all());

        return redirect()->route('vision-mission-values.index')
            ->with('success', 'Data berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(VisionMissionValue $visionMissionValue)
    {
        return Inertia::render('VisionMissionValues/Show', [
            'item' => $visionMissionValue,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VisionMissionValue $visionMissionValue)
    {
        return Inertia::render('VisionMissionValues/Edit', [
            'item' => $visionMissionValue,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VisionMissionValue $visionMissionValue)
    {
        $request->validate([
            'type' => 'required|in:vision,mission,value',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'description' => 'nullable|string',
            'order_position' => 'required|integer|min:0',
            'is_active' => 'boolean',
        ]);

        $visionMissionValue->update($request->all());

        return redirect()->route('vision-mission-values.index')
            ->with('success', 'Data berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VisionMissionValue $visionMissionValue)
    {
        $visionMissionValue->delete();

        return redirect()->route('vision-mission-values.index')
            ->with('success', 'Data berhasil dihapus.');
    }

    /**
     * Get data by type for API
     */
    public function getByType($type)
    {
        $items = VisionMissionValue::where('type', $type)
            ->active()
            ->ordered()
            ->get();

        return response()->json($items);
    }
}
