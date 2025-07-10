<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\VisionMissionValue;

class VisionMissionValueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Data Visi
        VisionMissionValue::create([
            'type' => 'vision',
            'title' => 'Visi Desa Tanjung Selamat',
            'content' => 'Mewujudkan Desa Tanjung Selamat yang sejahtera, mandiri, dan berkeadilan melalui pembangunan berkelanjutan yang berbasis kearifan lokal dan partisipasi masyarakat.',
            'description' => 'Visi ini menggambarkan cita-cita jangka panjang desa untuk mencapai kesejahteraan masyarakat yang menyeluruh.',
            'order_position' => 1,
            'is_active' => true,
        ]);

        // Data Misi
        VisionMissionValue::create([
            'type' => 'mission',
            'title' => 'Meningkatkan Kualitas Sumber Daya Manusia',
            'content' => 'Meningkatkan kualitas pendidikan, kesehatan, dan keterampilan masyarakat melalui program-program pemberdayaan yang berkelanjutan.',
            'description' => 'Fokus pada pengembangan SDM sebagai modal dasar pembangunan desa.',
            'order_position' => 1,
            'is_active' => true,
        ]);

        VisionMissionValue::create([
            'type' => 'mission',
            'title' => 'Mengembangkan Ekonomi Lokal',
            'content' => 'Mengembangkan potensi ekonomi lokal berbasis pertanian, perikanan, dan industri rumah tangga yang ramah lingkungan.',
            'description' => 'Pemberdayaan ekonomi masyarakat melalui optimalisasi sumber daya lokal.',
            'order_position' => 2,
            'is_active' => true,
        ]);

        VisionMissionValue::create([
            'type' => 'mission',
            'title' => 'Membangun Infrastruktur yang Memadai',
            'content' => 'Membangun dan memperbaiki infrastruktur desa seperti jalan, irigasi, dan fasilitas umum untuk mendukung aktivitas masyarakat.',
            'description' => 'Pembangunan infrastruktur sebagai penunjang kegiatan ekonomi dan sosial.',
            'order_position' => 3,
            'is_active' => true,
        ]);

        VisionMissionValue::create([
            'type' => 'mission',
            'title' => 'Melestarikan Budaya dan Lingkungan',
            'content' => 'Melestarikan nilai-nilai budaya lokal dan menjaga kelestarian lingkungan untuk generasi mendatang.',
            'description' => 'Keseimbangan antara pembangunan dan pelestarian warisan budaya serta lingkungan.',
            'order_position' => 4,
            'is_active' => true,
        ]);

        // Data Nilai Dasar
        VisionMissionValue::create([
            'type' => 'value',
            'title' => 'Gotong Royong',
            'content' => 'Membangun semangat kebersamaan dan saling membantu dalam setiap kegiatan pembangunan desa.',
            'description' => 'Nilai dasar yang menjadi fondasi kehidupan bermasyarakat di desa.',
            'order_position' => 1,
            'is_active' => true,
        ]);

        VisionMissionValue::create([
            'type' => 'value',
            'title' => 'Transparansi',
            'content' => 'Menyelenggarakan pemerintahan desa yang terbuka, jujur, dan dapat dipertanggungjawabkan kepada masyarakat.',
            'description' => 'Prinsip keterbukaan dalam penyelenggaraan pemerintahan desa.',
            'order_position' => 2,
            'is_active' => true,
        ]);

        VisionMissionValue::create([
            'type' => 'value',
            'title' => 'Inovasi',
            'content' => 'Mengembangkan kreativitas dan inovasi dalam menyelesaikan masalah dan memanfaatkan peluang pembangunan.',
            'description' => 'Semangat untuk terus berinovasi dalam pembangunan desa.',
            'order_position' => 3,
            'is_active' => true,
        ]);

        VisionMissionValue::create([
            'type' => 'value',
            'title' => 'Keberlanjutan',
            'content' => 'Melaksanakan pembangunan yang memperhatikan keseimbangan aspek ekonomi, sosial, dan lingkungan.',
            'description' => 'Prinsip pembangunan berkelanjutan untuk generasi mendatang.',
            'order_position' => 4,
            'is_active' => true,
        ]);

        VisionMissionValue::create([
            'type' => 'value',
            'title' => 'Keadilan',
            'content' => 'Memberikan pelayanan dan kesempatan yang sama kepada seluruh masyarakat tanpa diskriminasi.',
            'description' => 'Nilai keadilan dalam pelayanan publik dan pembangunan.',
            'order_position' => 5,
            'is_active' => true,
        ]);
    }
}
