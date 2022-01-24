<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AboutProjectSeeder::class);
        $this->call(HomePageSeeder::class);
        $this->call(AdminsTableSeeder::class);
        $this->call(ImagesTableSeeder::class);
        $this->call(DocumentsTableSeeder::class);
        $this->call(PostsTableSeeder::class);
        $this->call(PartnersTableSeeder::class);
        $this->call(WorkersTableSeeder::class);
        $this->call(CategoryTableSeeder::class);
        $this->call(FaqsTableSeeder::class);
        $this->call(TendersTableSeeder::class);
        $this->call(ContactsTableSeeder::class);
        $this->call(SocialMediasTableSeeder::class);
    }
}
